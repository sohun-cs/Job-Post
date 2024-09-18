import React from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export const Category = () => {
    return (
        <div className='my-24'>
            <Tabs>
                <TabList className='text-center'>
                    <Tab>MERN-Stack</Tab>
                    <Tab>App Development</Tab>
                    <Tab>Web Development</Tab>
                </TabList>

                <div className='my-12'>
                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                </div>
            </Tabs>

        </div>
    )
}
