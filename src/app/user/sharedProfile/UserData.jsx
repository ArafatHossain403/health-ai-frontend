import { callFetcher } from '@/app/helper/fetcher';
import { calculateAgeInYears, swalError } from '@/app/helper/functions';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

const UserData = ({userData}) => {

    return (
        <div>
            <div className="stats shadow ml-7">
                <div className="stat">
                    <div className="stat-title font-bold">
                        Name: <span className="stat-value text-red-600 text-sm">
                            {userData?.name}
                            </span>
                    </div>
                    <div className="stat-title font-bold">
                        Email: <span className="stat-value text-red-600 text-sm">
                            {userData?.email}
                            </span>
                    </div>
                </div>

                <div className="stat">
                    <div className="stat-title font-bold">
                        Gender: <span className="stat-value text-success text-sm capitalize">
                            {userData?.gender}
                            </span>
                    </div>
                    <div className="stat-title font-bold">
                        Status: <span className="stat-value text-success text-sm">
                            {userData?.status == 1 ? 'Active': 'Inactive'}
                            </span>
                    </div>
                </div>

                <div className="stat">
                    <div className="stat-title font-bold">
                        Mobile: <span className="stat-value text-warning text-sm">
                            {userData?.mobile}
                            </span>
                    </div>
                    <div className="stat-title font-bold">
                        Address: <span className="stat-value text-warning text-sm">
                            {userData?.address}
                            </span>
                    </div>
                </div>

                <div className="stat">
                    <div className="stat-title font-bold">
                        Date of Birth: <span className="stat-value text-info text-sm">
                            {moment(userData?.birth_date).format('ll')}
                            </span>
                    </div>
                    <div className="stat-title font-bold">
                        Age: <span className="stat-value text-info text-sm">
                            {userData?.birth_date 
                                ? calculateAgeInYears(new Date(userData?.birth_date))
                                : 'N/A'
                            }
                            </span>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default UserData;