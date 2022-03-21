import {Menu} from 'semantic-ui-react'

import React from 'react';

const MenuComponent = () => (
    <Menu>
        <Menu.Item
            name='browse'
        >
            Магазин книг
        </Menu.Item>

        <Menu.Menu position='right'>
            <Menu.Item
                name='signup'
            >
                Итого: &nbsp;<b>0</b> руб.
            </Menu.Item>

            <Menu.Item
                name='help'
            >
                Корзина (<b>0</b>)
            </Menu.Item>
        </Menu.Menu>
    </Menu>
);

export default MenuComponent;
