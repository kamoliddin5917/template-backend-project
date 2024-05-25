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
-- -
-- file name language
CREATE TABLE file_name_lang (
    id serial primary key not null,
    lang varchar(36) not null,
    data varchar(256) not null,
    file_id int not null,
        CONSTRAINT fk_file_id FOREIGN KEY(file_id) REFERENCES files(id) ON DELETE CASCADE,
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
    jshshir varchar(128) default null,
    avatar text default null,
    login varchar(128) default null,
    password text default null,
    roles text[] not null,
    one_id_login varchar(128) default null,
    is_verified boolean default false,
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

-- Stansiya toifasi
CREATE TABLE station_categories (
    id serial primary key not null,
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
-- Stansiya toifasi name language
CREATE TABLE station_category_name_lang (
    id serial primary key not null,
    lang varchar(36) not null,
    data varchar(256) not null,
    station_category_id int not null,
        CONSTRAINT fk_station_category_id FOREIGN KEY(station_category_id) REFERENCES station_categories(id) ON DELETE CASCADE,
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
-- Stansiya turi
CREATE TABLE station_types (
    id serial primary key not null,
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
-- Stansiya turi name language
CREATE TABLE station_type_name_lang (
    id serial primary key not null,
    lang varchar(36) not null,
    data varchar(256) not null,
    station_type_id int not null,
        CONSTRAINT fk_station_type_id FOREIGN KEY(station_type_id) REFERENCES station_types(id) ON DELETE CASCADE,
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
-- iyerarxiya: MTU, uchastka, stansiya
CREATE TABLE taxonomies (
    id serial primary key not null,
    name varchar(128) unique not null,
    hierarchical boolean default false,
    sector boolean default false,
    parent_id INT DEFAULT NULL,
        CONSTRAINT fk_parent_id FOREIGN KEY(parent_id) REFERENCES taxonomies(id) ON DELETE CASCADE

);
-- not complete
-- Data: MTU, uchastka, stansiya
CREATE TABLE terms (
    id serial primary key not null,
    parent_id INT DEFAULT NULL,
        CONSTRAINT fk_parent_id FOREIGN KEY(parent_id) REFERENCES terms(id) ON DELETE SET NULL,
    taxonomy_id INT DEFAULT NULL,
        CONSTRAINT fk_taxonomy_id FOREIGN KEY(taxonomy_id) REFERENCES taxonomies(id) ON DELETE SET NULL,
    code varchar(128) default null,
    osm_id text default null,
    station_category_id int default null,
        CONSTRAINT fk_station_category_id FOREIGN KEY(station_category_id) REFERENCES station_categories(id) ON DELETE SET NULL,
    station_type_id int default null,
        CONSTRAINT fk_station_type_id FOREIGN KEY(station_type_id) REFERENCES station_types(id) ON DELETE SET NULL,
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
-- -
CREATE TABLE term_name_lang (
    id serial primary key not null,
    lang varchar(36) not null,
    data varchar(256) not null,
    term_id int not null,
        CONSTRAINT fk_term_id FOREIGN KEY(term_id) REFERENCES terms(id) ON DELETE CASCADE,
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
-- -
CREATE TABLE term_description_lang (
    id serial primary key not null,
    lang varchar(36) not null,
    data text not null,
    term_id int not null,
        CONSTRAINT fk_term_id FOREIGN KEY(term_id) REFERENCES terms(id) ON DELETE CASCADE,
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
-- -
-- Station photos
CREATE TABLE term_files (
    id serial primary key not null,
    term_id int not null,
        CONSTRAINT fk_term_id FOREIGN KEY(term_id) REFERENCES terms(id) ON DELETE CASCADE,
    file_id int not null,
        CONSTRAINT fk_file_id FOREIGN KEY(file_id) REFERENCES files(id) ON DELETE CASCADE,
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
-- -
-- User term
CREATE TABLE user_terms (
    id serial primary key not null,
    term_id int not null,
        CONSTRAINT fk_term_id FOREIGN KEY(term_id) REFERENCES terms(id) ON DELETE CASCADE,
    user_id int not null,
        CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
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
