'use client'
import React, { useEffect, useState } from 'react';
import WithAuth from '@/app/helper/WithAuth';
import DiagnosisHistoryChart from '../sharedProfile/DiagnosisHistoryChart';
import DiagnosisHistoryTable from '../sharedProfile/DiagnosisHistoryTable';
import { swalError } from '@/app/helper/functions';
import { callFetcher } from '@/app/helper/fetcher';

const DiagnosisHistoryPage = ({userData}) => {
    const [histories, setHistories] = useState([]);

    useEffect(() => {
        (async () => {
         
          try {
            const historyData = await callFetcher('user/diagnose/diabetes/history', 'get');
            
            setHistories(historyData);
            return;
          } catch (error) {
            swalError(error.message)
          }
        })()
      }, []);

    return (
        <div className="mx-auto">
         
            <DiagnosisHistoryChart histories={histories} userData={userData}/>

            <DiagnosisHistoryTable histories={histories} userData={userData}/>
            
        </div>
    );
};

export default WithAuth(DiagnosisHistoryPage);