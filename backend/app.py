from flask import Flask, render_template, request, jsonify, send_file
from PIL import Image
import io
from ultralytics import YOLO
import numpy as np

app = Flask(__name__)
yolo_model = None

@app.route('/')
def welcome_page():
    return render_template('welcome.html')

def yolo_detect(img):
    results = yolo_model.predict(img)
    return results[0].plot()

@app.route('/process', methods=['POST'])
def process_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    image_file = request.files['image']
    img = Image.open(image_file)
    img_np = np.array(img)
    processed_img_np = yolo_detect(img_np)
    processed_img = Image.fromarray(processed_img_np)

    img_io = io.BytesIO()
    processed_img.save(img_io, 'JPEG')
    img_io.seek(0)

    return send_file(img_io, mimetype='image/jpeg')

if __name__ == '__main__':
    yolo_model = YOLO('proper_yolo.pt')
    app.run(debug=True)
