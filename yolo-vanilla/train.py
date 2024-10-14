from ultralytics import YOLO

# Load a model
model = YOLO("yolo11n.pt")


# Train the model
train_results = model.train(
    data="train.yaml",  # path to dataset YAML
    epochs=20,  # number of training epochs
    imgsz=1920,  # training image size
    device="cpu",  # device to run on, i.e. device=0 or device=0,1,2,3 or device=cpu
)