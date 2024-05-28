import streamlit.components.v1 as components  # Import Streamlit
from streamlit_custom_blank import custom_component
import streamlit as st




st.markdown("##### Testing Streamlit Custom Component")
num_clicks = custom_component(key="foo2", name="Foo")
st.markdown("You've clicked %s times!" % int(num_clicks))