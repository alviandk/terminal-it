import './index.css'

function Header() {
  return (
    <header id="header" 
      className="navbar navbar-expand-lg navbar-end navbar-absolute-top navbar-light navbar-show-hide" 
      data-hs-header-options="{
              &quot;fixMoment&quot;: 1000,
              &quot;fixEffect&quot;: &quot;slide&quot;
      }" 
      hsheader="true"
    >
  
      <div className="container navbar-topbar">
        <nav className="js-mega-menu navbar-nav-wrap hs-menu-initialized hs-menu-horizontal">
          
          <div 
            id="topbarNavDropdown" 
            className="navbar-nav-wrap-collapse collapse navbar-collapse navbar-topbar-collapse"
          >
            <div className="navbar-toggler-wrapper">
              <div className="navbar-topbar-toggler d-flex justify-content-between align-items-center">
                <span className="navbar-toggler-text small">Topbar</span>
  
                <button 
                  className="navbar-toggler" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#topbarNavDropdown" 
                  aria-controls="topbarNavDropdown" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation"
                >
                  <i className="bi-x"></i>
                </button>
              </div>
            </div>
  
            
          </div>
        </nav>
      </div>

      <div className="container">
        <nav className="js-mega-menu navbar-nav-wrap hs-menu-initialized hs-menu-horizontal">
        
          <a className="navbar-brand" href="" aria-label="Front">
            <img className="navbar-brand-logo" src="./assets/svg/logos/logo.svg" alt="Logo"/>
          </a>

          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNavDropdown" 
            aria-controls="navbarNavDropdown" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-default">
              <i className="bi-list"></i>
            </span>
            <span className="navbar-toggler-toggled">
              <i className="bi-x"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="navbar-absolute-top-scroller">
              <ul className="navbar-nav">
                <li className="hs-has-mega-menu nav-item">
                  <a 
                    id="landingsMegaMenu" 
                    className="hs-mega-menu-invoker nav-link active" 
                    
                    href="#" 
                    >Landings
                  </a>
  
                  
                </li>
   
                <li className="hs-has-sub-menu nav-item">
                  <a 
                    id="companyMegaMenu" 
                    className="hs-mega-menu-invoker nav-link  " 
                    href="#" 
                    >Company
                  </a>
                  
                </li>

                <li className="hs-has-sub-menu nav-item">
                  <a 
                    id="companyMegaMenu" 
                    className="hs-mega-menu-invoker nav-link  " 
                    href="#" 
                    >Pages
                  </a>
                  
                </li>
                <li className="hs-has-sub-menu nav-item">
                  <a 
                    id="companyMegaMenu" 
                    className="hs-mega-menu-invoker nav-link  " 
                    href="#" 
                    >Blog
                  </a>
                  
                </li>
                

                <li className="nav-item">
                  <a 
                    className="btn btn-primary btn-transition" 
                    href="https://themes.getbootstrap.com/product/front-multipurpose-responsive-template/" 
                    target="_blank">Get in Touch
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
