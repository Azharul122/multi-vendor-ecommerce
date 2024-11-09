import React from 'react'
import SellerHeader from '../../../shared/SellerHeader/SellerHeader'
import { Outlet } from 'react-router-dom'
import SellerFooter from '../../../shared/SellerFooter/SellerFooter'

const SellerLayout = () => {
    return (
        <div>
            <footer>
                <SellerHeader />
            </footer>
            <Outlet />
            <footer>
                <SellerFooter />
            </footer>
        </div>
    )
}

export default SellerLayout