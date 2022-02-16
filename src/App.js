import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function App() {

  return (
    <div className="app">
      <h3>How to create tabs in React - <a href="https://www.cluemediator.com" target="_blank" rel="noreferrer noopener">Clue Mediator</a></h3>
      <Tabs defaultIndex={1}>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
          <Tab disabled>Title 3</Tab>
          <Tab>Title 4</Tab>
        </TabList>

        <TabPanel>
          <h3>Tab 1</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </TabPanel>
        <TabPanel>
          <h3>Tab 2</h3>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </TabPanel>
        <TabPanel>
          <h3>Tab 3</h3>
        </TabPanel>
        <TabPanel>
          <h3>Tab 4</h3>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;