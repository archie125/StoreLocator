import React, { Component } from 'react';
import { Layout } from 'antd';
import Brand from '../features/Brand';
import Search from '../search/Search';
import Map from '../map/Map';
import SearchResult from '../search-result/SearchResult'

import './main.scss';

const { Content } = Layout;

class Main extends Component {
    render() {
        return (
             <div className='main-layout'>
                <Content className='content'>
                    <Brand />
                    <Search />
                    <div className='search-content'>
                    <Map />
                    <SearchResult />
                        
                    </div>    
                </Content>     
            </div>
        );
    }
}


export default Main;