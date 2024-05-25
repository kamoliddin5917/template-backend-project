-- -
-- file
CREATE TABLE files (
    id serial primary key not null,
    url text not null,
    mimetype varchar(128) default null,
    size int default null,
    code varchar(128) default null,
    note varchar(128) default null,
    is_active boolean default true,
    is_deleted boolean default false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_edited_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP DEFAULT NULL,
    created_by int default null,
    last_edited_by int default null,
    deleted_by int default null
);
-- user
CREATE TABLE users (
    id serial primary key not null,
    firstname varchar(256) default null,
    lastname varchar(256) default null,
    middlename varchar(256) default null,
    avatar text default null,
    login varchar(128) default null,
    password text default null,
    roles text[] not null,
    note varchar(128) default null,
    is_active boolean default true,
    is_deleted boolean default false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_edited_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP DEFAULT NULL,
    created_by int default null,
    last_edited_by int default null,
    deleted_by int default null
);


