import { Button, Card, Container, Divider, Skeleton } from "@mui/material";
import React from "react";
import "./preview.css";

function PreviewComponent(props) {
  const handleUpload = () => {
    console.log("uploading shit");
  };

  const handleDownload = () => {
    console.log("downloading shit");
  };

  const getButtonConfig = () => {
    switch (props.previewType) {
      case "Upload":
        return {
          label: "upload image",
          variant: "outlined",
          onclick: handleUpload,
        };
      case "Download":
        return {
          label: "download image",
          variant: "contained",
          onclick: handleDownload,
        };
    }
  };
  const buttonConfig = getButtonConfig();
  return (
    <div>
      <Container maxWidth="sm">
        <Card variant="outlined" className="preview-card">
          <Skeleton
            className="preview-skeleton"
            variant="rounded"
            width={300}
            height={300}
            animation="none"
          />
          <Divider
            className="preview-divider"
            orientation="horizontal"
            variant="middle"
            sx={{ margin: "20px 0", width: "100%" }}
          />
          <Button
            className="action-button"
            variant={buttonConfig.variant}
            onClick={buttonConfig.onclick}
          >
            {props.previewType} Image
          </Button>
        </Card>
      </Container>
    </div>
  );
}

export default PreviewComponent;
