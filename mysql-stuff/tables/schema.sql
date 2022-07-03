-- Active: 1656789151348@@127.0.0.1@3306@PyRepDB


-- drop procedure if exists sp_make_tables;

create procedure sp_make_tables (nuke tinyint)
Begin

if nuke then
    drop table if exists `PyRepDB`.reports;
    drop table if exists `PyRepDB`.report_folders;
end if;

if sf_tblcnt('report_folders', 'PyRepDB') = 0 then

    create table PyRepDB.report_folders(
        id int(12) unsigned AUTO_INCREMENT,
        name varchar(140) not null,
        parent_folder_id int(10) unsigned,
        primary key(id),
        foreign key (parent_folder_id) references PyRepDB.report_folders (id)
    );
end if;

if (select count(*) from PyRepDB.report_folders) = 0 then
    insert into PyRepDB.report_folders 
        (name, parent_folder_id)
    values
        ('Home', null);
end if;


if sf_tblcnt('reports', 'PyRepDB') = 0 then
    create table PyRepDB.reports(
        id int(12) unsigned auto_increment,
        name varchar(140) not null,
        description text,
        folder_id int(12) unsigned not null,
        report_code text,
        primary key (id),
        foreign key(folder_id) references PyRepDB.report_folders (id)
    );
end if;

end

