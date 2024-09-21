
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './CategoryCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Category = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_APP_URL}/jobs`);
            setJobs(data);
        }
        getData();
    });

    return (
        <div className='my-24'>
            <Tabs>
                <div className='flex items-center justify-center'>
                    <TabList>
                        <Tab>App Development</Tab>
                        <Tab>Web Development</Tab>
                        <Tab>Machine Learning</Tab>
                    </TabList>
                </div>

                <div>
                    <TabPanel>

                        <div className='grid grid-cols-3 gap-8 justify-items-center'>
                            {
                                jobs.filter(j => j.category == "Web Development").map(job =>
                                    <CategoryCard
                                        key={job.id}
                                        job={job}
                                    ></CategoryCard>)
                            }
                        </div>

                    </TabPanel>
                    <TabPanel>

                        <div className='grid grid-cols-3 gap-8 justify-items-center'>
                            {
                                jobs.filter(j => j.category == "App Development").map(job =>
                                    <CategoryCard
                                        key={job.id}
                                        job={job}
                                    ></CategoryCard>)
                            }
                        </div>

                    </TabPanel>
                    <TabPanel>

                        <div className='grid grid-cols-3 gap-8 justify-items-center'>
                            {
                                jobs.filter(j => j.category == "Machine Learning").map(job =>
                                    <CategoryCard
                                        key={job.id}
                                        job={job}
                                    ></CategoryCard>)
                            }
                        </div>

                    </TabPanel>
                </div>
            </Tabs>
        </div>
    )
}
