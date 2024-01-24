
// 'use client';

import { Accordion } from 'flowbite-react';

import React from 'react'
import Headers from './Headers';
import Footers from './Footers';
import Buttons from './Buttons';

const AccordionComp = () => {
    return (
        <div className='max-w-[1200px] mx-auto pt-10'>
            <Accordion className='bg-white'>
                <Accordion.Panel>
                    <Accordion.Title>Headers</Accordion.Title>
                    <Accordion.Content>
                        <Headers />
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>Footers</Accordion.Title>
                    <Accordion.Content>
                        <Footers />
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>Buttons</Accordion.Title>
                    <Accordion.Content>
                        <Buttons />
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    )
}

export default AccordionComp