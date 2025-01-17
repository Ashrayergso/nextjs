import { useState, useEffect } from "react";
import { Tab, Tabs } from "@mui/material";
import { useRouter } from "next/router";
import AgentPrompt from "./tabs/AgentPrompt";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
export default function AgentPanel({
  chains,
  selectedChain,
  setSelectedChain,
  chainArgs,
  contextResults = 5,
  shots = 1,
  browseLinks = false,
  websearch = false,
  websearchDepth = 0,
  enableMemory = false,
  injectMemoriesFromCollectionNumber = 0,
  conversationResults = 5,
  singleStep = false,
  fromStep = 0,
  allResponses = false,
  useSelectedAgent = true,
  setUseSelectedAgent,
  conversationName,
  setConversationName,
  setConversations,
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
    <AgentPrompt
      key="chat"
      mode="Chat"
      selectedChain={selectedChain}
      setSelectedChain={setSelectedChain}
      chains={chains}
      chainArgs={chainArgs}
      contextResults={contextResults}
      shots={shots}
      browseLinks={browseLinks}
      websearch={websearch}
      websearchDepth={websearchDepth}
      enableMemory={enableMemory}
      injectMemoriesFromCollectionNumber={injectMemoriesFromCollectionNumber}
      conversationResults={conversationResults}
      conversationName={conversationName}
      setConversationName={setConversationName}
      setConversations={setConversations}
      theme={theme}
    />,
    <AgentPrompt
      key="prompt"
      mode="Prompt"
      selectedChain={selectedChain}
      setSelectedChain={setSelectedChain}
      chains={chains}
      chainArgs={chainArgs}
      contextResults={contextResults}
      shots={shots}
      browseLinks={browseLinks}
      websearch={websearch}
      websearchDepth={websearchDepth}
      enableMemory={enableMemory}
      injectMemoriesFromCollectionNumber={injectMemoriesFromCollectionNumber}
      conversationResults={conversationResults}
      conversationName={conversationName}
      setConversationName={setConversationName}
      setConversations={setConversations}
      theme={theme}
    />,
    <AgentPrompt
      key="Instruction"
      mode="Instruction"
      selectedChain={selectedChain}
      setSelectedChain={setSelectedChain}
      chains={chains}
      chainArgs={chainArgs}
      contextResults={contextResults}
      shots={shots}
      browseLinks={browseLinks}
      websearch={websearch}
      websearchDepth={websearchDepth}
      enableMemory={enableMemory}
      injectMemoriesFromCollectionNumber={injectMemoriesFromCollectionNumber}
      conversationResults={conversationResults}
      conversationName={conversationName}
      setConversationName={setConversationName}
      setConversations={setConversations}
      theme={theme}
    />,
    <AgentPrompt
      key="chainExecution"
      mode="Chain"
      selectedChain={selectedChain}
      setSelectedChain={setSelectedChain}
      chains={chains}
      chainArgs={chainArgs}
      contextResults={contextResults}
      shots={shots}
      browseLinks={browseLinks}
      websearch={websearch}
      websearchDepth={websearchDepth}
      enableMemory={enableMemory}
      injectMemoriesFromCollectionNumber={injectMemoriesFromCollectionNumber}
      conversationResults={conversationResults}
      singleStep={singleStep}
      fromStep={fromStep}
      allResponses={allResponses}
      useSelectedAgent={useSelectedAgent}
      setUseSelectedAgent={setUseSelectedAgent}
      conversationName={conversationName}
      setConversationName={setConversationName}
      setConversations={setConversations}
      theme={theme}
    />,
  ];
  return <>{tabs[tab]}</>;
}
