//ESTA ES LA ESTRUCTURA VISUAL DE DASHBOARD

import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Movie from './Movie';
import Footer from './Footer';
import { Route,  Routes } from 'react-router-dom';
import { TablaProductos } from './TablaProductos';
import {UltimoProducto} from './UltimoProducto';
import { Categorias } from './Categorias';
import { PrincipalContent } from './PrincipalContent';
function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <Routes>
                        <Route path='/' exact element={<PrincipalContent />}/>
                        <Route path='/categorias' exact element={<Categorias />}/>
                        <Route path='/productos' element={<TablaProductos />}/>
                        <Route path='/ultimo' element={<UltimoProducto />}/>
                    </Routes>
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;