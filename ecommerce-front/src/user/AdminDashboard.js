import React from 'react'
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth'
import Layout from '../core/Layout'

const AdminDashboard = () => {
    const { user: { _id, name, email, role } } = isAuthenticated();

    const adminLinks = () => (
        <div className="card mb-5">
            <h4 className="card-header">Admin Links</h4>
            <ul className="list-group">
                <li className="list-group-item">
                    <Link to="/create/category" className="nav-link">Create Category</Link>
                </li>
                <li className="list-group-item">
                    <Link to="/create/product" className="nav-link">Create Product</Link>
                </li>
            </ul>
        </div>
    )

    const adminInformation = () => (
        <div className="card mb-5">
            <h3 className="card-header">Admin Information</h3>
            <ul className="list-group">
                <li className="list-group-item">{name}</li>
                <li className="list-group-item">{email}</li>
                <li className="list-group-item">{role === 1 ? 'Admin' : 'Registered User'}</li>
            </ul>
        </div>
    )

    return (
        <Layout title="Dashboard" description={`Hi ${name}`}
            className="container-fluid">
            <div className="row">
                <div className="col-3">
                    {adminLinks()}
                </div>
                <div className="col-9">
                    {adminInformation()}
                </div>
            </div>

        </Layout>
    )
}

export default AdminDashboard
