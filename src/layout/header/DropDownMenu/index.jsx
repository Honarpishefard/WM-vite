/* eslint-disable react/jsx-no-bind */
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export function DropDownMenu({title, sections}) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    }

    function handleClose() {
        setAnchorEl(null);
    }

    const sectionGen = sections.map((item) => {
        return <MenuItem onClick={handleClose}>{item}</MenuItem>
      })

    return (
        <div>
            <Button
                sx={{
                    color: 'text.white',
                    fontWeight: '500',
                    fontSize: '1.4rem',
                    lineHeight: '20px',
                    cursor: 'pointer',
                    textTransform: 'none',
                    minWidth: 'unset',
                }}
                aria-owns={anchorEl ? 'DropDownMenu' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                onMouseOver={handleClick}>{title}</Button>
            <Menu
                id="DropDownMenu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}>
                {sectionGen}
            </Menu>
        </div>
    );
}
