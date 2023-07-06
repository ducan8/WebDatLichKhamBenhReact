"use client";
import React, { Component} from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

export default class Chatbot extends Component {
  render() {
    return (
      <FacebookProvider appId="1565948963808728" chatSupport>
        <CustomChat pageId="1565948963808728" minimized={true}/>
      </FacebookProvider>    
    );
  }
}

