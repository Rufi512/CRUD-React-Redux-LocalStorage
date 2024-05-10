import {motion, spring} from "framer-motion"
import lightIcon from '../static/icons/light.png'
import darkIcon from '../static/icons/dark.png'

const ThemeSwitch = (props) =>{
    const theme = props.theme.toLowerCase()
    const variants = {
      dark:{
        x:45,
        transition:{
          ease:"easeOut",
          duration: 0.3
        }
      },
      light:{
        x:0,
        transition:{
          ease:"easeOut",
          duration: 0.3
        }
      }
    }
    return(
        <motion.button  onClick={()=>{props.handleSchemeColor()}} className="absolute outline-none flex items-center top-5 right-3 w-20 px-1 rounded-3xl h-8 bg-[#5650a3] dark:bg-[#5650a3]">
            <motion.div layout className="rounded-full relative w-full h-8 flex items-center">
              <motion.div initial={theme === "dark" ? "dark" : "light"} animate={theme === "dark" ? "dark" : "light"} variants={variants} className=" relative w-6 h-6 rounded-full">
                <img className={`w-6 h-6 object-contain p-[3px] rounded-full bg-[#817ccd94] absolute  transition-all duration-300 ${theme === "light" ? "opacity-100" : "opacity-0"}`} src={lightIcon} alt="light"/>
                <img className={`w-6 h-6 object-contain p-[3px] absolute transition-all duration-300 rounded-full bg-[#1d2e6f] px ${theme === "dark" ? "opacity-100" : "opacity-0"}`} src={darkIcon} alt="dark"/>
              </motion.div>
            </motion.div>
        </motion.button>
    )
}

export default ThemeSwitch