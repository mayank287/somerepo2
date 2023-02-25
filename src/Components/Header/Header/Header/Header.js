import React,{useState} from 'react';

import "./Header.css"

const Header = () => {
    window.addEventListener('scroll',function(){
        //When Scroll Header at top position

      const header   =  this.document.querySelector(".header")
      header.classList.toggle("active",window.scrollY > 100)
    })

    //toggle menu

    const [Mobile, setMobile] = useState(false)
  return (
     <>
     <header className='header'>
      <div className='container d_flex'>
          <div className='logo'>
              <img src='' alt=""/>
              <div className='navlink'>
                  {/* <ul className='link f_flex uppercase'> */}
                      <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase" } onClick = {() => setMobile(false)} >
                      <li>
                          <a href='#home'>Home</a>
                      </li>  <li>
                          <a href='#home'>Features</a>
                      </li>  <li>
                          <a href='#home'>Projects</a>
                      </li>  <li>
                          <a href='#home'>resume</a>
                      </li>  <li>
                          <a href='#home'>clients</a>
                      </li>  <li>
                          <a href='#home'>blog</a>
                      </li>
                      <li>
                          <a href='#home'>contact</a>
                      </li>
                  </ul>
                  <button className='toggle' onClick={() => setMobile(!Mobile)}>
                      {/* {Mobile ? 
                      here the close and ioen btn comes
                      
                    
                    
                    
                    } */}
                        
                        
                        
                        
                        </button> 



              </div>
          </div>

      </div>
     </header>
     <section className='demo'>
         
     </section>
     </>
  )
}

export default Header