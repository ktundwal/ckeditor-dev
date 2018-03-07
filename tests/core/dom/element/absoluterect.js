/* bender-tags: editor,dom */

( function() {

	bender.editor = true;

	bender.test( {
		// (#1724)
		'test element has correct absolute rect (rect1)': function() {
			var editor = this.editor,
				el = CKEDITOR.document.getById( 'rect1' ),
				absoluteRect = el.getAbsoluteClientRect( editor );

			assert.isNumberInRange( absoluteRect.top, 5, 7, 'top' );
			assert.isNumberInRange( absoluteRect.bottom, 15, 17, 'bottom' );
			assert.isNumberInRange( absoluteRect.left, 5, 7, 'left' );
			assert.isNumberInRange( absoluteRect.right, 15, 17, 'right' );
			assert.isNumberInRange( absoluteRect.height, 9, 11, 'height' );

			// getBoundingClientRect for IE browsers doesn't contain information about x and y.
			if( !CKEDITOR.env.ie ) {
				assert.isNumberInRange( absoluteRect.x, 4, 5, 'x' );
				assert.isNumberInRange( absoluteRect.y, 4, 5, 'y' );
			}
		},

		// (#1724)
		'test element has correct absolute rect (rect2)': function() {
			var editor = this.editor,
				el = CKEDITOR.document.getById( 'rect2' ),
				absoluteRect = el.getAbsoluteClientRect( editor );

			assert.isNumberInRange( absoluteRect.top, 10, 12, 'top' );
			assert.isNumberInRange( absoluteRect.bottom, 30, 32, 'bottom' );
			assert.isNumberInRange( absoluteRect.left, 0, 2, 'left' );
			assert.isNumberInRange( absoluteRect.right, 15, 17, 'right' );
			assert.isNumberInRange( absoluteRect.height, 19, 21, 'height' );

			// getBoundingClientRect for IE browsers doesn't contain information about x and y.
			if( !CKEDITOR.env.ie ) {
				assert.isNumberInRange( absoluteRect.x, 0, 2, 'x' );
				assert.isNumberInRange( absoluteRect.y, 9, 11, 'y' );
			}
		}
	} );

} )();
