import Link from "next/link";
import { IconButton, Stack, Tooltip } from "@mui/material";
import { GitHub, LinkedIn, LogoDev } from "@mui/icons-material";

export default function SocialLinks() {
  return (
    <Stack direction="row" justifyContent="center" spacing={4}>
      <Tooltip arrow placement="top" title="GitHub">
        <IconButton
          component={Link}
          href="https://github.com/mailauki"
          target="_blank"
        >
          <GitHub />
        </IconButton>
      </Tooltip>

      <Tooltip arrow placement="top" title="LinkedIn">
        <IconButton
          component={Link}
          href="https://www.linkedin.com/in/julie-evans-381486180"
          target="_blank"
        >
          <LinkedIn />
        </IconButton>
      </Tooltip>

      <Tooltip arrow placement="top" title="Dev Blog">
        <IconButton
          component={Link}
          href="https://dev.to/mailauki"
          target="_blank"
        >
          <LogoDev />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}
