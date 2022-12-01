import NavScroll from '../../components/navbar';
import Table from "react-bootstrap/Table";
import * as S from './styles';
import { useEffect, useState } from 'react';
import { api } from '../../service/api';

interface IMonitoramento {
    id: number;
    entrada: string;
    saida: string;
    dia: string;
    usuario: {
        email: string;
    };
    tela: {
        nome: string;
    }
}



export default function Monitoramento(){
    
    const [monitor, setMonitor] = useState<IMonitoramento[]>([])

    useEffect(() => {
        loadMonitor()
    }, [])

    async function loadMonitor(){
        const response = await api.get(`/monitorar`)
        setMonitor(response.data)
    }

    return(
        <S.Container>
            <header>
                <NavScroll/>
            </header>
            <main>
                <div className="title">
                    <h1>Monitor de uso</h1>
                </div>
                <div className="table">
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Entrada</th>
                                <th>Saida</th>
                                <th>Dia</th>
                                <th>Usuario</th>
                                <th>Tela</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                monitor && monitor.map(m => (
                                    <tr key={m.id}>
                                        <td>{m.id}</td>
                                        <td>{m.entrada}</td>
                                        <td>{m.saida}</td>
                                        <td>{m.dia}</td>
                                        <td>{m.usuario?.email}</td>
                                        <td>{m.tela?.nome}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </div>
            </main>
        </S.Container>
    )
}