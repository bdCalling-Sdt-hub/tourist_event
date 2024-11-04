import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
 A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world
   A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world
   A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world
   A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world
   A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world
   A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world
   A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world
   A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world
   A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
   A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
   A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world
  it can be found as a welcome guest in many households across the world
  it can be found as a welcome guest in many households across the world`;
const items: CollapseProps['items'] = [
    {
        key: '1',
        label: 'This is panel header 1',
        children: <p>{text}</p>,
    },
    {
        key: '2',
        label: 'This is panel header 2',
        children: <p>{text}</p>,
    },
    {
        key: '3',
        label: 'This is panel header 3',
        children: <p>{text}</p>,
    },
    {
        key: '4',
        label: 'This is panel header 1',
        children: <p>{text}</p>,
    },
    {
        key: '5',
        label: 'This is panel header 2',
        children: <p>{text}</p>,
    },
    {
        key: '6',
        label: 'This is panel header 3',
        children: <p>{text}</p>,
    },
];
const FaqPages = () => {
    return (
        <div className=' container mx-auto'>
            <h3 className='text-3xl text-[var(--color-blue-900)] mt-10'>FAQs</h3>
            <p className='text max-w-[800px] my-3'>Welcome to the Bidding Websitye FAQ page! Below are some common questions and answers to help you get the most out of your bidding experience. If you don’t find what you’re looking for, feel free to contact us.</p>
            <Collapse accordion items={items} />
        </div>
    )
}

export default FaqPages
