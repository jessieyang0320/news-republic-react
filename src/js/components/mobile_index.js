import React, {Component}from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import MobileList from './mobile_list';
import {Tabs,Carousel} from 'antd';


const TabPane = Tabs.TabPane;


class MobileIndex extends Component{
	render(){
		const settings = {
      dots:true,
      infinite: true,
      speed: 500,
      slidesToShow:1,
      autoplay: true
    }

		return(

			<div>
				<MobileHeader/>

				<Tabs>
				  <TabPane tab="Top" key="1">
					<div className="carousel">
						<Carousel {...settings}>
							<div><img src={require("../../images/carousel_1.jpg")} alt=""/></div>
			                <div><img src={require("../../images/carousel_2.jpg")} alt=""/></div>
			                <div><img src={require("../../images/carousel_3.jpg")} alt=""/></div>
			                <div><img src={require("../../images/carousel_4.jpg")} alt=""/></div>
						</Carousel>
					</div>
				  	<MobileList count={20} type="top"/>
					</TabPane>
					<TabPane tab="Society" key="2">
						<MobileList count={20} type="shehui"/>
					</TabPane>
					<TabPane tab="Domestic" key="3">
						<MobileList count={20} type="guonei"/>
					</TabPane>
					<TabPane tab="Global" key="4">
						<MobileList count={20} type="guoji"/>
					</TabPane>
					<TabPane tab="Entertainment" key="5">
						<MobileList count={20} type="yule"/>
					</TabPane>

				</Tabs>
				<MobileFooter/>
			</div>);
	}
}

export default MobileIndex