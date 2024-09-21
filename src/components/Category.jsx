
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './CategoryCard';

export const Category = () => {

    const loadedJobs = useLoaderData();

    console.log("Jobs: ", loadedJobs);

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
                                loadedJobs.filter(j => j.category == "Web Development").map(job =>
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
                                loadedJobs.filter(j => j.category == "App Development").map(job =>
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
                                loadedJobs.filter(j => j.category == "Machine Learning").map(job =>
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
