export const PostEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="title" validate={required()} />
            <TextInput multiline source="teaser" validate={required()} />
            <RichTextInput source="body" validate={required()} />
            <DateInput label="Publication date" source="published_at" />
            <ReferenceManyField label="Comments" reference="comments" target="post_id">
                <Datagrid>
                    <TextField source="body" />
                    <DateField source="created_at" />
                    <EditButton />
                </Datagrid>
            </ReferenceManyField>
        </SimpleForm>
    </Edit>
);
