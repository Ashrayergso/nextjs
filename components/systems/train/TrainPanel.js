import { useState, useEffect } from "react";
import { Tab, Tabs, Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import WebTraining from "./tabs/WebTraining";
import FileTraining from "./tabs/FileTraining";
import TextTraining from "./tabs/TextTraining";
import GithubTraining from "./tabs/GithubTraining";
import MemoryManagement from "./tabs/MemoryManagement";
import { useTheme } from "@mui/material/styles";
import ArxivTraining from "./tabs/ArxivTraining";

export default function TrainPanel({
  collectionNumber = 0,
  limit = 10,
  minRelevanceScore = 0.0,
}) {
  const router = useRouter();
  const [tab, setTab] = useState(router.query.tab || "0");

  useEffect(() => {
    // Push the current tab to the router query
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, tab },
      },
      undefined,
      { shallow: true }
    );
  }, [tab]);

  const handleTabChange = (event, newTab) => {
    setTab(newTab);
  };

  const theme = useTheme();

  const tabs = [
    <WebTraining collectionNumber={collectionNumber} />,
    <FileTraining collectionNumber={collectionNumber} />,
    <TextTraining collectionNumber={collectionNumber} />,
    <GithubTraining collectionNumber={collectionNumber} />,
    <MemoryManagement
      key="memory"
      collectionNumber={collectionNumber}
      minRelevanceScore={minRelevanceScore}
      limit={limit}
    />,
    <ArxivTraining collectionNumber={collectionNumber} />,
  ];

  return (
    <>
      <Tabs
        value={tab}
        onChange={handleTabChange}
        TabIndicatorProps={{
          style: {
            background: theme.palette.mode == "dark" ? "#FFF" : "#000",
          },
        }}
        sx={{ mb: "0.5rem" }}
        textColor={theme.palette.mode == "dark" ? "white" : "black"}
        allowScrollButtonsMobile={true}
        variant="fullWidth"
      >
        <Tab label="Website Training" value="0" wrapped={true} />
        <Tab label="File Training" value="1" wrapped={true} />
        <Tab label="Text Training" value="2" wrapped={true} />
        <Tab label="GitHub Repository Training" value="3" wrapped={true} />
        <Tab label="arXiv Training" value="5" wrapped={true} />
        <Tab label="Memory Management" value="4" wrapped={true} />
      </Tabs>
      <Box
        sx={{
          padding: "1rem",
        }}
      >
        {tabs[tab]}
      </Box>
    </>
  );
}
