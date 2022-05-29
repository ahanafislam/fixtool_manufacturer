import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MakeAdmin = () => {
    const navigate = useNavigate();
    const [isMaking , setIsMaking] = useState(false);
    
    let userList =[];

    const { isLoading, error, data, refetch } = useQuery('userList', async () =>{
            const url = `https://fixtool.herokuapp.com/user`;
            const options = {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            }
            const orderList = await (await fetch(url, options)).json()
            
            if (orderList.status === 401 || orderList.status === 403) {
                signOut(auth);
                localStorage.removeItem('accessToken');
                navigate('/');
            }
            return orderList;
        }
    )

    if(isLoading || isMaking) {
        return <Loading/>
    }

    userList = data;

    // Make a user to admin
    const makeAdmin = email => {
        setIsMaking(true)

        fetch(`https://fixtool.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    setIsMaking(false);
                    toast.error('Failed to Make an admin');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    setIsMaking(false);
                    toast.success(`Successfully made an admin`);
                }
            })
    }

    return (
        <section className='px-auto'>
            <h3 className='text-center font-bold text-primary text-2xl mb-3'>All Product List</h3>
            <div className="overflow-x-auto">
                <table className="table mx-auto w-full">
                    <thead>
                        <tr>
                            <th className='bg-primary text-white'>User Name</th>
                            <th className='bg-primary text-white'>Email</th>
                            <th className='bg-primary text-white'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userList?.map(user => <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user?.role !== 'admin' && <button
                                        onClick={() => makeAdmin(user.email)}
                                        className='btn btn-xs btn-info text-white'>
                                        Make Admin
                                    </button>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MakeAdmin;