import styles from './box.module.css'

export const Box = () => {

    return (
        

<body>
	<h2>Welcome to GeeksforGeeks</h2>
	<p>This is the example of <i>Redirect
to a particular section using HTML on same page</i>
</p>
	<a href="#contactUs"> Contact Us </a>
	<br/>
	<div className="styles.standard">
		<h2>Home section</h2>
	</div>
	<div className="styles.standard">
		<h2>About Us section</h2>
	</div>

	<div id = "contactUs" className="styles.standard">
		<h2>Contact Us section </h2>
	</div>
	<div className="styles.standard">
		<h2>Team Section</h2>
	</div>
</body>


    )
}