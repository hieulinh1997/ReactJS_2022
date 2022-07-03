import * as React from 'react';

export interface IAdminLayoutProps {
}

export function AdminLayout(props: IAdminLayoutProps) {
    React.useEffect(() => {
        console.log('admin');
        
    })
    return (
        <div>
            Admin
        </div>
    );
}
