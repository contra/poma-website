define(function(){return function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs||jade.attrs,escape=escape||jade.escape,rethrow=rethrow||jade.rethrow,merge=merge||jade.merge;var buf=[];with(locals||{}){var interp;buf.push('<div class="marketing">  <h1>Contact Us</h1><form class="well"><input type="text" name="contactname" placeholder="Contact Name" class="input-large"/><br/><input type="text" name="contactemail" placeholder="Contact Email" class="input-large"/><br/><input type="text" name="contactphone" placeholder="Contact Phone Number" class="input-large"/><br/><textarea name="contactphone" placeholder="Contact Phone Number" rows="10" class="input-xxlarge"></textarea><p><button type="submit" class="btn btn-medium btn-primary">Submit</button></p></form></div>')}return buf.join("")}})