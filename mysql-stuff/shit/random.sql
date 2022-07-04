call sp_make_tables(1);

select * from `PyRepDB`.report_folders

alter table `PyRepDB`.report_folders
    add column is_root tinyint not null default 0;

select * from `PyRepDB`.report_folders;

update `PyRepDB`.report_folders
    set is_root = 1;

alter table `PyRepDB`.report_folders
    add column created_at datetime not null default now(),
    add column updated_at datetime;

select 1;
select * from `PyRepDB`.report_folders;