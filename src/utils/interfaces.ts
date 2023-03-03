
interface Api {
	link: string;
	setState: React.Dispatch<React.SetStateAction<Category[]>>;
	text: string;
	isLoading: React.Dispatch<React.SetStateAction<boolean>>;
	isError: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Category {
	id: number
	name: string
}

interface Question {

}

interface AppCont {
	categories?: Category[]
	isLoading: boolean
	isError: boolean
}

interface Changes {
	event: React.ChangeEvent<HTMLInputElement>;
	setState: React.Dispatch<React.SetStateAction<Question[]>>;
}

interface Options {
	questionNum: string
	categoryId: string
	diffLevel: ''
}

export type {
	Api,
	Category,
	Question,
	AppCont,
	Changes,
	Options,
	
}