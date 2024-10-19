import { Stack, Divider } from "@mui/material";
import React from "react";
import PreviewComponent from "../PreviewComponent/preview";

function GridComponent() {
  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <PreviewComponent previewType={"Upload"} />
        <PreviewComponent previewType={"Download"} />
      </Stack>
    </div>
  );
}

export default GridComponent;
