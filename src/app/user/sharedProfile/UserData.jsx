import { callFetcher } from '@/app/helper/fetcher';
import { swalError } from '@/app/helper/functions';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

const UserData = ({userData}) => {

    return (
        <div>
            <div className="stats shadow">
                <div className="stat">
                    
                    <div className="stat-title">Name</div>
                    <div className="stat-value text-primary">{userData?.name}</div>
                    <div className="stat-title flex text-center"> Email: {userData?.email}</div>
                    
                </div>
                <div className="stat">
                    
                    <div className="stat-title">Mobile</div>
                    <div className="stat-value text-primary">{userData?.mobile}</div>
                    <div className="stat-title flex text-center"> Address: {userData?.address}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Date of Birth</div>
                    <div className="stat-value">{moment(userData?.birth_date).format('ll')}</div>
                </div>
  
            </div>
            
        </div>
    );
};

export default UserData;