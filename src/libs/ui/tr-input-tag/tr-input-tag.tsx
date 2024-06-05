import { Tag } from 'node_modules/react-tag-input/types/components/SingleTag';
import { WithContext as ReactTags, SEPARATORS } from 'react-tag-input';
import './InputTag.css';
import { styled } from '@mui/system';

const Div = styled('div')({
    padding: "5px"
})

interface TrInputTagProps {
    tags: Array<Tag>
    handleDelete: (index: number) => void
    handleAddition: (tag: Tag) => void
    tabIndex: string
}

const TrInputTag = (props: TrInputTagProps) => {
    const { tags, handleDelete, handleAddition } = props
    return (
        <Div>
            <ReactTags
                tags={tags}
                separators={[SEPARATORS.ENTER]}
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                inputFieldPosition="bottom"
                allowDragDrop={false}
                allowUnique={false}
                placeholder="Queries (Press enter)"
                classNames={{
                    tags: 'ReactTags__tags',
                    tagInput: 'ReactTags__tagInput',
                    tagInputField: 'ReactTags__tagInputField',
                    selected: 'ReactTags__selected',
                    tag: 'ReactTags__selected ReactTags__tag',
                    remove: 'ReactTags__selected ReactTags__remove',
                    suggestions: 'ReactTags__suggestions',
                    activeSuggestion: 'ReactTags__activeSuggestion',
                    editTagInput: 'ReactTags__editTagInput',
                    editTagInputField: 'ReactTags__editTagInputField',
                    clearAll: 'ReactTags__clearAll',
                }}
            />
        </Div>
    )
}

export default TrInputTag;