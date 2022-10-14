namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyEntityEventListenerSchema

	/// <exclude/>
	public class UsrRealtyEntityEventListenerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyEntityEventListenerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyEntityEventListenerSchema(UsrRealtyEntityEventListenerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("45a946ba-dbf1-4b46-aec1-a5e4cbefd827");
			Name = "UsrRealtyEntityEventListener";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("6ccf379f-df52-4f8c-a45a-065132b84601");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,133,82,77,111,219,48,12,61,203,191,130,48,118,176,129,194,104,175,109,23,160,201,210,33,64,209,13,77,210,203,176,131,34,51,174,6,89,50,36,57,93,22,228,191,143,146,236,126,33,64,117,208,129,124,124,124,143,36,104,222,162,235,184,64,88,161,181,220,153,173,175,102,70,111,101,211,91,238,165,209,25,28,50,136,175,119,82,55,176,220,59,143,237,85,198,198,192,219,58,139,213,92,123,233,37,186,207,17,213,124,135,218,39,224,175,24,220,199,200,157,164,14,26,109,177,20,79,216,242,123,82,8,95,33,95,59,251,128,92,249,125,94,254,14,37,93,191,81,82,128,80,220,57,72,153,19,36,112,9,83,238,240,68,38,112,28,232,99,108,164,50,59,18,42,107,132,157,145,53,252,208,11,237,208,122,114,80,152,205,31,20,30,28,234,26,237,25,36,182,41,110,201,78,228,188,177,141,3,44,51,70,100,135,248,51,182,161,182,213,91,146,177,26,203,171,0,97,44,209,128,141,218,201,98,145,2,101,2,14,160,26,133,108,185,130,206,74,17,230,144,208,213,119,244,171,125,135,245,204,168,190,213,143,92,245,120,61,64,39,69,152,213,207,128,95,47,191,229,99,55,185,133,34,145,76,224,226,124,124,101,210,75,15,171,133,155,113,45,80,97,77,125,188,237,113,168,100,206,219,176,71,186,20,199,27,92,97,219,41,238,73,204,144,78,231,49,8,91,147,93,58,32,77,243,162,235,9,58,239,140,224,74,254,227,27,133,203,72,84,188,238,242,196,94,242,51,200,163,159,133,91,25,51,149,205,139,131,161,209,123,53,36,53,5,170,91,99,91,238,139,15,42,137,237,162,58,159,126,121,101,241,79,214,60,131,198,103,152,255,21,216,5,153,99,209,136,57,198,29,30,195,137,28,179,227,127,208,165,58,100,37,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("cc1f78c0-7c02-ac5d-34fd-83c0f7774b51"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("6ccf379f-df52-4f8c-a45a-065132b84601"),
				CreatedInSchemaUId = new Guid("45a946ba-dbf1-4b46-aec1-a5e4cbefd827"),
				ModifiedInSchemaUId = new Guid("45a946ba-dbf1-4b46-aec1-a5e4cbefd827")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("45a946ba-dbf1-4b46-aec1-a5e4cbefd827"));
		}

		#endregion

	}

	#endregion

}

