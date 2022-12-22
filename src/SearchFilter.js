import React, { useState } from 'react';
import Data from './Data';


const SearchFilter = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <>
            <div className='search-input-os'>
                <input type='text' placeholder='Search ...' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            </div>
            <div className='table-data-os'>
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone no.</th>
                    </thead>

                    {
                        Data.filter((item) => {
                            if (inputValue === '') {
                                return item;
                            }
                            else if (item.name.toLowerCase().includes(inputValue.toLowerCase()) || item.username.toLowerCase().includes(inputValue.toLowerCase()) || item.email.toLowerCase().includes(inputValue.toLowerCase()) || item.phone.toString().includes(inputValue.toString()) ){
                                return item;
                            }

                        }).map((value, key) => {
                            return (
                                <tbody>
                                    <tr key={key}>
                                        <td>{value.name}</td>
                                        <td>{value.username}</td>
                                        <td>{value.email}</td>
                                        <td>{value.phone}</td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                </table>
            </div>
        </>
    )
}

export default SearchFilter
