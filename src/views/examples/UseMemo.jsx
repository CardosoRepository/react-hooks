import React, {useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useMemo } from 'react';

function sum(a, b) {
    const future = Date.now() + 2000;
    while(Date.now() < future) {} //espera 2 segundos
    return a + b;
}

const UseMemo = (props) => {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [n3, setN3] = useState(0);

    //Primeiro passo (Errado)
    // const result = sum(n1, n2);

    // Contorna o problema com alternativa
    // const [result, setResult] = useState(0)
    // useEffect(function () {
    //     setResult(sum(n1, n2))
    // }, [n1, n2])/

    // Contorna o problema com useMemo
    const result = useMemo(() => sum(n1, n2), [n1, n2]);
    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memorizado!"
            />
            <div className="center">
                <input type="number" className="input" 
                    value={n1} onChange={e => setN1(parseInt(e.target.value))}/>
                <input type="number" className="input" 
                    value={n2} onChange={e => setN2(parseInt(e.target.value))}/>
                <input type="number" className="input" 
                    value={n3} onChange={e => setN3(parseInt(e.target.value))}/>
                <span className="text">{result}</span>
            </div>
        </div>
    )
}

export default UseMemo
