import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from '../../../shared/AdminHeader/AdminHeader'
import AdminFooter from '../../../shared/AdminFooter/AdminFooter'

const AdminLayout = () => {
    return (
        <div>
            <header>
                <AdminHeader />
            </header>
            <Outlet />
            <footer>
                <AdminFooter />
            </footer>

        </div>
    )
}

export default AdminLayout