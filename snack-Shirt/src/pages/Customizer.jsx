import React, { useState , useEffect} from 'react';
import state from '../store';
import { useSnapshot } from 'valtio';
import {AnimatePresence, motion} from 'framer-motion';
import config from '../config/config';
import {download} from '../assets';
import { downloadCanvasToImage, reader} from '../config/helpers';
import {EditorTabs,FilterTabs,DecalTypes} from '../config/constants';
import {slideAnimation, fadeAnimation} from '../config/motion';

import { CustomButton , AiPicker, ColorPicker, FilePicker, Tab} from '../components';

const Customizer = () => {
  const snap= useSnapshot(state);
  return (
    <AnimatePresence>
      {!snap.intro&& (
        <>
        
        <motion.div
        key="custom"
        className='absolute top-0 left-0 z-10'
        {...slideAnimation('left')}

        >
        <div className='flex items-center min-h-screen'>
          <div className='editortabs-container tabs'>
            {EditorTabs.map((tab) => (
              <Tab 
              key={tab.name}
              tab={tab}
              handleClick={() => {}}
              />
            ))}
          </div>
          </div>  
        </motion.div>
        <motion.div className='absolute top-5 right-5 z-10' {...fadeAnimation}>
          <CustomButton type="filled"
          title= "Go Back"
          handleClick={() => state.intro = true}
          customStyles="w-fix px-4 py-2.5 font-bold text-sm"
          />

        </motion.div>
        <motion.div className='filtertabs-container ' {...slideAnimation('up')}>
        {FilterTabs.map((tab) => (
              <Tab 
              key={tab.name}
              tab={tab}
              isFilterTab
              isActiveTab=""
              handleClick={() => {}}
              />
            ))}


        </motion.div>
        </>
      )}
      
      
    </AnimatePresence>
  )
}

export default Customizer
