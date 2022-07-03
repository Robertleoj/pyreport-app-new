drop function if exists sf_tblcnt;
-- $$
create function sf_tblcnt (
    inTableName varchar(150),
    inSchema varchar(150)
) returns int(10) deterministic

begin

select 1 into @a;
return (
    select count(*)
    from information_schema.tables
    where 
        table_name = inTableName
        and table_schema = inSchema
);
end

