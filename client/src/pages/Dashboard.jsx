import { Gem, Sparkles } from 'lucide-react'
import { Protect } from "@clerk/clerk-react";
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import {AiToolsData} from '../assets/assets'

const Dashboard = () => {
  const navigate = useNavigate()
  const { user } = useUser()

  return (
    <>
      <div className='h-full overflow-y-scroll p-6'>
        <div className='flex justify-start gap-4 flex-wrap'>
          <div className='flex justify-between items-center w-72 p-4 px-6
          bg-white rounded-xl border border-gray-200'>
            <div className='text-slate-600'>
              <p className='text-sm'>Active Plan</p>
              <h2 className='text-xl font-semibold'>
                <Protect plan='premium' fallback="Free">Premium</Protect>
              </h2>
            </div>
            <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF61C5] to-[#9E53EE] text-white flex justify-center items-center'>
              <Gem className='w-5 text-white'/>
            </div>
          </div>
        </div>


   <div className='px-4 sm:px-20 xl:px-32'>
        <div className='text-center'>
          <h2 className='text-slate-700 text-[42px] font-semibold'>Powerful AI Tools</h2>
          <p className='text-gray-500 max-w-lg mx-auto'>
            Everything you need to create, enhance, and optimize your content with cutting-edge AI technology.
          </p>
        </div>

        <div className='flex flex-wrap mt-10 justify-center'>
          {AiToolsData.map((tool, index) => (
            <div
              key={index}
              className='p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer'
              onClick={() => user ? navigate(tool.path) : alert("Please login to access this tool")}
            >
              <tool.Icon
                className='w-12 h-12 p-3 text-white rounded-xl'
                style={{ background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})` }}
              />
              <h3 className='mt-6 mb-3 text-lg font-semibold'>{tool.title}</h3>
              <p className='text-gray-400 text-sm max-w-[95%]'>{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
      </div>

      
    </>
  )
}

export default Dashboard
