import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth'
import Layout from '../core/Layout'
import { createCategory } from './apiAdmin';

const CreateCategory = () => {
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const { user, token } = isAuthenticated();

    const handleChange = e => {
        setError('')
        setName(e.target.value)
    }

    const clickSubmit = (event) => {
        event.preventDefault();
        setError('');
        setSuccess(false);
        createCategory(user._id, token, { name })
            .then(data => {
                if (data.error) {
                    setError(data.error)
                } else {
                    setError('')
                    setSuccess(true)
                }
            })
    }

    const showError = () => {
        if (error) {
            return <h4 className="alert alert-danger">Category should be unique</h4>
        }
    }

    const showSuccess = () => {
        if (success) {
            return <h4 className="alert alert-info">{name} is created</h4>
        }
    }

    const goBack = () => (
        <div className="mt-5">
            <Link to="/admin/dashboard" className="text-warning">
                Back to Dashboard
            </Link>
        </div>
    )

    const newCategoryForm = () => (
        <form onSubmit={clickSubmit}>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input
                    className="form-control"
                    onChange={handleChange}
                    type="text"
                    value={name}
                    autoFocus
                    required />
            </div>
            <button className="btn btn-outline-primary">Create Category</button>
        </form>
    )

    return (
        <Layout title="Add category" description={`Hi ${user.name},ready to add a new category`}
            className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showError()}
                    {showSuccess()}
                    {newCategoryForm()}
                    {goBack()}
                </div>
            </div>
        </Layout>
    )
}

export default CreateCategory
