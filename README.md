A simple javascript that splits a table after a certain number of rows, clones the table and adds a page-break-before css property, inserts the remaining rows into the cloned table. Rinse and repeat.

There is a bug with webkit (which wkhtmltopdf uses) that makes long tables break unevenly on page break. I experienced this bug when using wkhtmltopdf (converting html to pdf files) with dynamic long tables in a Rails 3.1 application. There are times in which the 'tr' tags are split in half so the resulting row is cut in between two pages.

This javascript can be used to avoid that problem by specifying a maximum number of rows for that table and adding a page-break-before css property that ensures that the table is not split wrongly on page break.

##Requirements
jQuery 1.7.2
