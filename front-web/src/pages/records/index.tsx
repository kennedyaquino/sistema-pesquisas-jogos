import React, { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import { RecordsResponse } from './types';
import { formartDate } from './helpers';
import Pagination from './pagination';
import Filters from '../../components/Filters'

//const BASE_URL = 'https://sds1-kennedy.herokuapp.com';


const BASE_URL = 'http://localhost:8080';

const Records = () => {

    const [recordsResponse, setRecordResponse] = useState<RecordsResponse>();

    const [activePage, setActivepage] = useState(0);
    

    useEffect(() => {
        axios.get(`${BASE_URL}/records?linesPerPage=12&page=${activePage}`)
        .then(response => setRecordResponse(response.data));
    }, [activePage]);

    const handlePageChange = (index: number) => {
        setActivepage(index);
    }

    return (
        <div className="page-container">
            <Filters link={"/charts"} linkText="VER GRÁFICO" />
            <table className="records-table" cellPadding="0" cellSpacing="0">
                <thead>
                    <tr>
                        <th>INSTANTE</th>
                        <th>NOME</th>
                        <th>IDADE</th>
                        <th>PLATAFORMA</th>
                        <th>GENERO</th>
                        <th>TITULO DO GAME</th>
                    </tr>
                </thead>
                <tbody>
                    {recordsResponse?.content.map(record => (
                        <tr key={record.id}>
                            <td>{formartDate(record.moment)}</td>
                            <td>{record.name}</td>
                            <td>{record.age}</td>
                            <td className="text-secondary">{record.platform}</td>
                            <td>{record.genreName}</td>
                            <td className="text-primary">{record.gameTitle}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination 
                activePage={activePage}
                goTopage={handlePageChange}
                totalPages={recordsResponse?.totalPages}
            />
        </div>
    );
}

export default Records;