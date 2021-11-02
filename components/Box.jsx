import styles from './box.module.css'

export const Box = () => {

    return (
        

<div>
	<h2>Welcome to GeeksforGeeks</h2>
	<p>This is the example of <i>Redirect
to a particular section using HTML on same page</i>
</p>
	<a href="#contactUs"> Contact Us </a>
	<br/>
	<div className={styles.standard}>
		<h2>Home section</h2>
	</div>
	<div className={styles.standard}>
		<h2>About Us section</h2>
	</div>
	<div id="services"className="aspect-w-16 aspect-h-9">
  <iframe src="https://www.youtube.com/embed/r9jwGansp1E" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>

	<div id = "contactUs" className={styles.standard}>
		<h2>Contact Us section </h2>
	</div>
	<div className={styles.standard}>
		<h2>Team Section</h2>
	</div>
</div>


    )
}