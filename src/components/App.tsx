import nodeLogo from '../assets/node.svg'
import { useState } from 'react'
import Update from '@/components/update'

import {
  FocusStyleManager , Button, Spinner, Card, Elevation, AnchorButton, TextArea,
  Menu, MenuItem, MenuDivider, FormGroup, InputGroup, FileInput, RadioGroup, Radio,
  Icon, Intent
} from "@blueprintjs/core";


import '../App.scss'

console.log('[App.tsx:#453827]', `test Electron ${process.versions.electron}!`)


FocusStyleManager.onlyShowFocusOnTabs();

const { ipcRenderer } = require('electron')

process.once('loaded', () => {
  window.addEventListener('message', evt => {
    if (evt.data.type === 'select-dirs') {
      ipcRenderer.send('select-dirs')
    }
  })
})



function App() {
  const [count, setCount] = useState(3)
  const [testo, setTesto] = useState('Stato iniziale')



  return (
    <div className='App bp4-dark'>
      <div className="grid-container bp4-dark">
        <div className="grid-item top-bar">
          <nav className="bp4-navbar">
            <div>
              <div className="bp4-navbar-group bp4-align-left">
                <div className="bp4-navbar-heading">Sigma Backup</div>
              </div>
              <div className="bp4-navbar-group bp4-align-right">
                <button className="bp4-button bp4-minimal bp4-icon-home">Home</button>
                <button className="bp4-button bp4-minimal bp4-icon-document">ItemT1</button>
                <span className="bp4-navbar-divider"></span>
                <button className="bp4-button bp4-minimal bp4-icon-circle"></button>
                <button className="bp4-button bp4-minimal bp4-icon-notifications"></button>
                <button className="bp4-button bp4-minimal bp4-icon-cog"></button>
              </div>
            </div>
          </nav>
        </div>
        <div className="grid-item side-bar">
          <Menu>
              <MenuItem icon="new-text-box" onClick={(e)=>{alert('hello 1')}} text="ItemS1" />
              <MenuItem icon="new-object" onClick={(e)=>{alert('hello 2')}} text="ItemS2" />
              <MenuItem icon="new-link" onClick={(e)=>{alert('hello 3')}} text="ItemS3" />
              <MenuDivider />
              
              <MenuItem icon="new-text-box" onClick={(e)=>{alert('hello 4')}} text="ItemS4" />
              <MenuItem icon="new-object" onClick={(e)=>{alert('hello 5')}} text="ItemS5" />
              <MenuItem icon="new-link" onClick={(e)=>{alert('hello 6')}} text="ItemS6" />
              <MenuDivider />
              <MenuItem text="Settings..." icon="cog" intent="primary">
                  <MenuItem icon="tick" text="Save on edit" />
                  <MenuItem icon="blank" text="Compile on edit" />
              </MenuItem> 
              
          </Menu>
        </div>
        <div className="main-section">

          <div className="box-flex-cols">
            <div className="main-col1">
              <FormGroup
                  //helperText="Helper text with details..."
                  label="Source Folder"
                  labelFor="source-folder-path"
                  labelInfo="(required)"
              >
                  <InputGroup id="source-folder-path" placeholder="Path to source folder" />
              </FormGroup>

              <FormGroup
                  //helperText="Helper text with details..."
                  label="Destination Folder"
                  labelFor="destination-folder-path"
                  labelInfo="(required)"
              >
                  <InputGroup id="destination-folder-path" placeholder="Path to destination folder" />
              </FormGroup>


              <AnchorButton icon="saved"  text="Start Copy Backup" onClick={(e)=>{console.log(e.target.value)}}/>


              <div className="main-output-container">
                <TextArea
                    className="output-text"
                    id = "output"
                    fill = {true}
                    readOnly = {true}
                    value="">
                </TextArea>
              </div>


            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App


/*
      <div className='logo-box'>
        <a href='https://github.com/electron-vite/electron-vite-react' target='_blank'>
          <img src='./vite.svg' className='logo vite' alt='Electron + Vite logo' />
          <img src='./electron.svg' className='logo electron' alt='Electron + Vite logo' />
        </a>
      </div>
      <h1>Hello Electron + Vite + React</h1>
     <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Electron + Vite logo to learn more
      </p>
      <div className='flex-center'>
        Place static files into the<code>/public</code> folder <img style={{ width: '5em' }} src={nodeLogo} alt='Node logo' />
      </div>

      <Update />
*/



/*
      <div className="grid-container bp4-dark">
        <div className="grid-item top-bar">
          <nav className="bp4-navbar">
            <div>
              <div className="bp4-navbar-group bp4-align-left">
                <div className="bp4-navbar-heading">Max Vector</div>
              </div>
              <div className="bp4-navbar-group bp4-align-right">
                <button className="bp4-button bp4-minimal bp4-icon-home">Home</button>
                <button className="bp4-button bp4-minimal bp4-icon-document">Files</button>
                <span className="bp4-navbar-divider"></span>
                <button className="bp4-button bp4-minimal bp4-icon-user"></button>
                <button className="bp4-button bp4-minimal bp4-icon-notifications"></button>
                <button className="bp4-button bp4-minimal bp4-icon-cog"></button>
              </div>
            </div>
          </nav>
        </div>
        <div className="grid-item side-bar">
          <Menu>
              <MenuItem icon="new-text-box" onClick={(e)=>{alert('hello')}} text="New text box" />
              <MenuItem icon="new-object" onClick={(e)=>{alert('hello')}} text="New object" />
              <MenuItem icon="new-link" onClick={(e)=>{alert('hello')}} text="New link" />
              <MenuDivider />
              <MenuItem text="Settings..." icon="cog" intent="primary">
                  <MenuItem icon="tick" text="Save on edit" />
                  <MenuItem icon="blank" text="Compile on edit" />
              </MenuItem>
          </Menu>
        </div>
        <div className="grid-item main-section">
          <div className="main-section-lev1">
            <div className="main-section-item main-item1">          
              hello
            </div>
            <div className="main-section-item main-item2">
              hello
            </div>
            <div className="main-section-item main-item3">
              <br/>
              <FormGroup
                  helperText="Helper text with details..."
                  label="Label A"
                  labelFor="text-input"
                  labelInfo="(required)"
                  className="input-field"
              >
                <InputGroup id="text-input" placeholder="Placeholder text"  />
              </FormGroup></div>
            <div className="main-section-item main-item4">
                4
            </div>
            <div className="main-section-item main-item5">5</div>
            <div className="main-section-item main-item6">6</div>
            <div className="main-section-item main-item7">
              <AnchorButton text="  Avvia Acquisizione " className="bp4-icon-download" onClick={handleClick}/>
            </div>
          </div>
          

          
          </div>
          </div>
*/