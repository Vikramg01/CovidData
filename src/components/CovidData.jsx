import React, { useEffect, useState } from 'react';
const Data = () => {
    const [data, setData] = useState([]);
    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }
    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>
            <div className="heading">
            <h1>
                Covid Cases Data with API
            </h1>
            </div>

            <div>
                <table>

                    <thead>
                        <tr>

                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                            <th>Active</th>
                            <th>Updates</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((i) => {
                                return (
                                    <tr>
                                        <td>{i.state}</td>
                                        <td>{i.confirmed}</td>
                                        <td>{i.recovered}</td>
                                        <td>{i.deaths}</td>
                                        <td>{i.active}</td>
                                        <td>{i.lastupdatedtime}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default Data;